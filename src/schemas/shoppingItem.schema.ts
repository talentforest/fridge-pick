import { UnitLabelSchema } from '@/schemas/unitLabel.schema';
import { z } from 'zod';

export const ShoppingItemSchema = z.object({
  id: z.string(),

  ingredientId: z.string().optional(),

  label: z.string().min(1),

  quantity: z.number().int().positive().optional(),

  unitLabel: UnitLabelSchema.optional(),

  isCompleted: z.boolean(),

  memo: z.string().optional(),

  createdAt: z.any(),
  updatedAt: z.any(),
});
