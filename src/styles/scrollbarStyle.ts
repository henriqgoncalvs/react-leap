const scrollbarStyle = {
  '::-webkit-scrollbar': {
    height: '0.75rem',
    width: '0.75rem',
  },
  '::-webkit-scrollbar-track': {
    height: '0.25rem',
    borderLeft: '0.125rem solid #5BA699',
    borderRight: '0.125rem solid #5BA699',
    borderTop: '0.125rem solid #5BA699',
    borderBottom: '0.125 solid #5BA699',
    background: 'primary.600',
    borderRadius: '1.2rem',
  },
  '::-webkit-scrollbar-thumb': {
    background: 'primary.300',
    borderRadius: '0.075rem',
  },
};

export default scrollbarStyle;
