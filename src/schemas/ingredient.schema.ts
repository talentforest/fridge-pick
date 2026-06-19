import { UnitLabelSchema } from '@/schemas/unitLabel.schema';
import { z } from 'zod';

export const StorageTypeSchema = z.enum(['fridge', 'freezer', 'pantry']);

export const categorySchema = z.enum([]); // TODO

export const IngredientSchema = z.object({
  id: z.string(),

  label: z.string().min(1),

  isActive: z.boolean(),

  category: categorySchema, // TODO

  defaultStorage: StorageTypeSchema,

  expirationDays: z.number().int().nonnegative(),

  defaultUnitLabel: UnitLabelSchema,

  unitOptions: z.array(UnitLabelSchema).optional(),

  synonyms: z.array(z.string()).optional(),
});
