import React, { type FC } from 'react'
import { type RJSFSchema } from '@rjsf/utils'
import { type FormProps } from '@rjsf/core'
import { EmptyReactElement } from '@utils/commons'
import validator from '@rjsf/validator-ajv8'
import Form from '@rjsf/antd'
import clsx from 'clsx'
import { type CommonProps } from '@models/commons'

import style from './SchemaForm.module.scss'

const templates = {
  ButtonTemplates: { SubmitButton: EmptyReactElement }
}

/**
 * SchemaForm component description
 */
const SchemaForm: FC<SchemaFormProps> = ({ schema, onChange, className }) => {
  const classList = clsx(style.form, className)

  return (
    <Form schema={schema} validator={validator} onChange={onChange} templates={templates} className={classList} />
  )
}

export interface SchemaFormProps extends Omit<CommonProps, 'style'> {
  schema: RJSFSchema
  onChange?: FormProps['onChange']
}

export default SchemaForm
