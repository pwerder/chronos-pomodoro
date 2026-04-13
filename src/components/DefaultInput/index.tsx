/**
 * &: representa todas as props de um input html no react
 */
type DefaultInputProps = {
  id: string; // forca uma sobreescrita
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input type={type} id={id} />
    </>
  );
}
