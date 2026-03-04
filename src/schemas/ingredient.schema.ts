import { UnitLabelSchema } from '@/schemas/unitLabel.schema';
import { z } from 'zod';

export const StorageTypeSchema = z.enum(['냉장', '냉동', '실온']);

export const IngredientSchema = z.object({
  id: z.string(),

  label: z.string().min(1),

  isActive: z.boolean(),

  categories: z.array(z.string()), // TODO

  defaultStorage: StorageTypeSchema,

  expirationDays: z.number().int().nonnegative(),

  defaultUnitLabel: UnitLabelSchema,

  unitOptions: z.array(UnitLabelSchema).optional(),

  synonyms: z.array(z.string()).optional(),
});
