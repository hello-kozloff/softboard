export const sizes = {
  Small: '375px',
  Medium: '768px',
  Table: '992px',
  Desktop: '1180px',
}

const media = {
  Small: `(max-width: ${sizes.Small})`,
  Medium: `(max-width: ${sizes.Medium})`,
  Table: `(max-width: ${sizes.Table})`,
  Desktop: `(max-width: ${sizes.Desktop})`,
}

export default media
