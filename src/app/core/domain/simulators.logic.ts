// Pure deterministic functions for FinLit Lab Simulators

export interface BudgetSplit {
  needs: number;
  wants: number;
  savings: number;
}

export interface GrowthDataPoint {
  year: number;
  value: number;
  contributions?: number;
}

export interface RiskReturnData {
  expectedValue: number;
  pessimisticValue: number;
  optimisticValue: number;
}

/**
 * Calculates a standard 50/30/20 budget split perfectly deterministically.
 */
export function calculateBudgetSplit(monthlyIncome: number): BudgetSplit {
  const safeIncome = Math.max(0, monthlyIncome);
  return {
    needs: safeIncome * 0.5,
    wants: safeIncome * 0.3,
    savings: safeIncome * 0.2
  };
}

/**
 * Calculates savings growth with no interest, just flat adding per month.
 */
export function calculateSavingsGrowth(initialAmount: number, monthlyContribution: number, years: number): GrowthDataPoint[] {
  const data: GrowthDataPoint[] = [];
  const safeInitial = Math.max(0, initialAmount);
  const safeContrib = Math.max(0, monthlyContribution);
  const safeYears = Math.max(1, years);

  let total = safeInitial;
  let totalContribs = safeInitial;

  data.push({ year: 0, value: total, contributions: totalContribs });

  for (let i = 1; i <= safeYears; i++) {
    total += safeContrib * 12;
    totalContribs += safeContrib * 12;
    data.push({ year: i, value: total, contributions: totalContribs });
  }

  return data;
}

/**
 * Calculates compound interest growth.
 */
export function calculateCompoundInterest(
  principal: number,
  monthlyContribution: number,
  annualRatePercent: number,
  years: number
): GrowthDataPoint[] {
  const data: GrowthDataPoint[] = [];
  const safePrincipal = Math.max(0, principal);
  const safeContrib = Math.max(0, monthlyContribution);
  const safeRate = Math.max(0, annualRatePercent) / 100;
  const safeYears = Math.max(1, years);

  let currentBalance = safePrincipal;
  let totalContribs = safePrincipal;
  
  data.push({ year: 0, value: currentBalance, contributions: totalContribs });

  for (let i = 1; i <= safeYears; i++) {
    // Basic monthly compounding simulation
    for (let month = 1; month <= 12; month++) {
      currentBalance += safeContrib;
      currentBalance *= (1 + (safeRate / 12));
    }
    totalContribs += safeContrib * 12;
    data.push({ 
      year: i, 
      value: Number(currentBalance.toFixed(2)), 
      contributions: Number(totalContribs.toFixed(2)) 
    });
  }

  return data;
}

/**
 * Calculates the loss of purchasing power over time due to inflation.
 */
export function calculateInflationImpact(initialValue: number, inflationRatePercent: number, years: number): GrowthDataPoint[] {
  const data: GrowthDataPoint[] = [];
  const safeInitial = Math.max(0, initialValue);
  const safeRate = Math.max(0, inflationRatePercent) / 100;
  const safeYears = Math.max(1, years);

  let purchasingPower = safeInitial;
  data.push({ year: 0, value: purchasingPower });

  for (let i = 1; i <= safeYears; i++) {
    purchasingPower = purchasingPower / (1 + safeRate);
    data.push({ year: i, value: Number(purchasingPower.toFixed(2)) });
  }

  return data;
}

/**
 * Calculates a basic risk vs return comparison.
 * Demonstrates deterministic variance bounds based on a simplistic "risk level" (1 to 10).
 */
export function calculateRiskReturnComparison(
    investmentAmount: number, 
    riskLevel1To10: number, 
    years: number
): RiskReturnData {
  const initial = Math.max(0, investmentAmount);
  const risk = Math.max(1, Math.min(10, riskLevel1To10)); // Clamp 1-10
  const yrs = Math.max(1, years);

  // Simple deterministic bounds mapping
  // Higher risk = higher expected return, much broader variance
  const expectedAnnualReturn = 0.02 + (risk * 0.008); // Range: ~2.8% to 10%
  const volatility = risk * 0.03; // Range: 3% to 30% bounds

  // Apply compound interest
  const calcReturn = (rate: number) => initial * Math.pow(1 + rate, yrs);

  const expected = calcReturn(expectedAnnualReturn);
  
  // High risk implies potential for loss or great gain
  let pessimistic = calcReturn(expectedAnnualReturn - volatility);
  // Cap at 0 to avoid negative balances in simple standard investing
  if (pessimistic < 0) pessimistic = 0; 
  
  const optimistic = calcReturn(expectedAnnualReturn + volatility);

  return {
    expectedValue: Number(expected.toFixed(2)),
    pessimisticValue: Number(pessimistic.toFixed(2)),
    optimisticValue: Number(optimistic.toFixed(2))
  };
}
