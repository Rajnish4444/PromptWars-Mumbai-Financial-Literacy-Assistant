import { describe, it, expect } from 'vitest';
import { 
  calculateBudgetSplit, 
  calculateSavingsGrowth, 
  calculateCompoundInterest,
  calculateInflationImpact,
  calculateRiskReturnComparison
} from './simulators.logic';

describe('Simulators Logic', () => {

  describe('calculateBudgetSplit', () => {
    it('calculates 50/30/20 breakdown correctly', () => {
      const result = calculateBudgetSplit(1000);
      expect(result.needs).toBe(500);
      expect(result.wants).toBe(300);
      expect(result.savings).toBe(200);
    });

    it('safely handles negative income', () => {
      const result = calculateBudgetSplit(-500);
      expect(result.needs).toBe(0);
      expect(result.wants).toBe(0);
      expect(result.savings).toBe(0);
    });
  });

  describe('calculateSavingsGrowth', () => {
    it('calculates flat savings growth', () => {
      const result = calculateSavingsGrowth(100, 50, 2);
      expect(result.length).toBe(3); // Year 0, 1, 2
      expect(result[0].value).toBe(100);
      expect(result[1].value).toBe(700); // 100 + (50 * 12)
      expect(result[2].value).toBe(1300); // 700 + (50 * 12)
    });
  });

  describe('calculateCompoundInterest', () => {
    it('calculates basic compounding over 1 year', () => {
      const result = calculateCompoundInterest(1000, 100, 5, 1);
      // 1000 + 1200 contribution roughly + 5% interest
      expect(result.length).toBe(2);
      expect(result[1].value).toBeGreaterThan(2200);
      expect(result[1].contributions).toBe(2200);
    });

    it('handles 0% interest exactly like flat savings', () => {
      const noInterest = calculateCompoundInterest(100, 50, 0, 1);
      expect(noInterest[1].value).toBe(700);
    });
  });

  describe('calculateInflationImpact', () => {
    it('calculates decreasing purchasing power', () => {
      const result = calculateInflationImpact(1000, 3, 2);
      expect(result[0].value).toBe(1000);
      expect(result[1].value).toBeLessThan(1000);
      expect(result[2].value).toBeLessThan(result[1].value);
    });
  });

  describe('calculateRiskReturnComparison', () => {
    it('provides wider bounds for higher risk', () => {
      const lowRisk = calculateRiskReturnComparison(1000, 1, 10);
      const highRisk = calculateRiskReturnComparison(1000, 9, 10);

      const lowRiskGap = lowRisk.optimisticValue - lowRisk.pessimisticValue;
      const highRiskGap = highRisk.optimisticValue - highRisk.pessimisticValue;

      expect(highRiskGap).toBeGreaterThan(lowRiskGap);
      expect(highRisk.expectedValue).toBeGreaterThan(lowRisk.expectedValue);
    });
  });

});
