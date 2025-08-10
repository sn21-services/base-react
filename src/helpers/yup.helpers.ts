import * as yup from 'yup';
import type { RuleObject } from 'antd-mobile/es/components/form';

type ValidatorRule = RuleObject & {
  validator: (rule: RuleObject, value: unknown) => Promise<void>;
};

export const createYupValidator = (schema: yup.AnySchema) => {
  return (fieldName: string): ValidatorRule => {
    return {
      validator: async (_, value: unknown): Promise<void> => {
        try {
          await schema.validateAt(fieldName, { [fieldName]: value });
        } catch (error) {
          if (error instanceof yup.ValidationError) {
            throw new Error(error.message);
          }
          throw new Error('Validation error occurred');
        }
      },
    };
  };
};
