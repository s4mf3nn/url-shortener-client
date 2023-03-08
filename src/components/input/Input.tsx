import * as sc from './input.style';

export const Input = () => {
  return (
    <sc.Input
      type="url"
      placeholder="Past your link and make it shorter"
      onClick={() => alert(JSON.stringify(navigator.clipboard.readText()))}
    />
  );
};
