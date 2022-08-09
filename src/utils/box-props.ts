export type BoxProps = {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  margin?: number;

  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  padding?: number;
};

const propsMap: {[key: string]: string} = {
  marginTop: 'margin-top',
  marginBottom: 'margin-bottom',
  marginLeft: 'margin-left',
  marginRight: 'margin-right',
  margin: 'margin',

  paddingTop: 'padding-top',
  paddingBottom: 'padding-bottom',
  paddingLeft: 'padding-left',
  paddingRight: 'padding-right',
  padding: 'padding',
};

export function applyBoxProps(props: BoxProps): string {
  return Object.keys(props)
    .map(key => {
      // @ts-ignore
      const value = props[key];
      if (value === undefined) {
        return '';
      }
      return `${propsMap[key]}: ${value}px;`;
    })
    .join(' ');
}
