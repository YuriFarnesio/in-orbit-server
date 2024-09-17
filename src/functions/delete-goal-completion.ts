import { eq } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions } from '../db/schema'

interface DeleteGoalCompletionRequest {
  goalCompletionId: string
}

export async function deleteGoalCompletion({
  goalCompletionId,
}: DeleteGoalCompletionRequest) {
  const deleteResult = await db
    .delete(goalCompletions)
    .where(eq(goalCompletions.id, goalCompletionId))
    .returning()

  const goalCompletion = deleteResult[0]

  return {
    goalCompletion,
  }
}
