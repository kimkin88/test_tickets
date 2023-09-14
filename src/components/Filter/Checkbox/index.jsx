import { FieldWrapper, Wrapper, Label } from "./styles";

export const CheckboxField = ({ name, id, label, checked, onChange }) => {
  return (
    <FieldWrapper>
      <Wrapper>
        <input
          onChange={onChange}
          type="checkbox"
          className="checkbox"
          id={id}
          checked={checked}
        />
        <label htmlFor={name} />
      </Wrapper>
      <Label htmlFor={name} dangerouslySetInnerHTML={{ __html: label }} />
    </FieldWrapper>
  );
};
