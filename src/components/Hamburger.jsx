export default function Hamburger({ isOpen, toggleMenu }) {
    const lineCommonStyles = {
      transition: 'all 0.3s ease-in-out',
      width: '24px',
      height: '2px',
      background: 'white',
      position: 'relative',
      transformOrigin: 'center',
    };
  
    const topLineStyle = isOpen
      ? { ...lineCommonStyles, transform: 'rotate(45deg)', top: '6px' }
      : { ...lineCommonStyles, transform: 'rotate(0)', top: '0' };
  
    const middleLineStyle = isOpen
      ? { ...lineCommonStyles, opacity: 0 }
      : { ...lineCommonStyles, opacity: 1 };
  
    const bottomLineStyle = isOpen
      ? { ...lineCommonStyles, transform: 'rotate(-45deg)', top: '-6px' }
      : { ...lineCommonStyles, transform: 'rotate(0)', top: '0' };
  
    return (
      <div onClick={toggleMenu} style={{ padding: '6px 0' }}>
        <div style={topLineStyle}></div>
        <div style={{ ...middleLineStyle, margin: '4px 0' }}></div>
        <div style={bottomLineStyle}></div>
      </div>
    );
  }
  