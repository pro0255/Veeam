import { ButtonActions } from '../../FormRenderer/components/FormFooter/types'

export const SCHEMA = {
  uri: 'http://myserver/foo-schema.json',
  fileMatch: ['*'],
  schema: {
    required: ['items'],
    type: 'object',
    properties: {
      title: { type: 'string' },
      items: {
        type: 'array',
        items: {
          required: ['label', 'type'],
          type: 'object',
          properties: {
            label: { type: 'string' },
            type: { enum: ['numeric', 'string', 'multi-line', 'boolean', 'date', 'enum'] }
          },
          additionalProperties: false
        },
        additionalProperties: false
      },
      footer: {
        type: 'array',
        uniqueItems: true,
        items: {
          oneOf: [
            {
              required: ['buttonType'],
              type: 'object',
              properties: {
                buttonType: { enum: Object.values(ButtonActions) },
                additionalProperties: false
              }
            },
            {
              required: ['label'],
              type: 'object',
              properties: {
                label: { type: 'string' },
                additionalProperties: false
              }
            }
          ]
        },
        additionalProperties: false
      }
    },
    additionalProperties: false
  }
};
