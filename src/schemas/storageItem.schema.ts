import { StorageTypeSchema } from '@/schemas/ingredient.schema';
import { UnitLabelSchema } from '@/schemas/unitLabel.schema';
import { z } from 'zod';

export const StorageItemSchema = z
  .object({
    id: z.string(),

    ingredientId: z.string().optional(),
    customLabel: z.string().optional(),

    quantity: z.number().int().positive(),

    unitLabel: UnitLabelSchema,

    purchasedDate: z.string(), // YYYY-MM-DD
    expiresAt: z.string(),

    storage: StorageTypeSchema,

    memo: z.string().optional(),

    createdAt: z.any(),
    updatedAt: z.any(),
  })
  .refine((data) => data.ingredientId || data.customLabel, {
    message: 'ingredientId 또는 customLabel 중 하나는 반드시 필요합니다.',
  });

export const ConsumptionLogSchema = z.object({
  id: z.string(),

  ingredientId: z.string(),

  quantity: z.number().int().positive(),

  consumedAt: z.string(),

  sourceInventoryId: z.string().optional(),

  createdAt: z.any(),
});
