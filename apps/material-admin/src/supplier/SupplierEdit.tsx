import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SupplierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contactEmail" source="contactEmail" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
