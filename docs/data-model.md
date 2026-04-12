# Data Model

## users
- uid
- displayName?
- createdAt

## learningProgress
- uid
- completedModules: string[]
- weakTopics: string[]
- recommendedNextTopic: string
- updatedAt

## quizAttempts
- uid
- topic
- score
- answers
- createdAt

## savedSimulations
- uid
- simulatorType
- inputSnapshot
- createdAt

## tutorSessions
- uid
- promptType
- createdAt
- optional metadata only# Data Model

## users
- uid
- displayName?
- createdAt

## learningProgress
- uid
- completedModules: string[]
- weakTopics: string[]
- recommendedNextTopic: string
- updatedAt

## quizAttempts
- uid
- topic
- score
- answers
- createdAt

## savedSimulations
- uid
- simulatorType
- inputSnapshot
- createdAt

## tutorSessions
- uid
- promptType
- createdAt
- optional metadata only