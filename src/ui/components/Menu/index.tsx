import Icon from '../icons';

interface MenuProps {
  onClickClose: () => void;
}

const Menu = ({ onClickClose }: MenuProps) => {
  const menus = {
    New: {},
    Apparel: {
      Outer: '',
      Dress: '',
      'Bluse/Shirt': '',
      'T-Shirt': '',
      Knitwear: '',
      Skirt: '',
      Pants: '',
      Denim: '',
      Kids: '',
    },
    Bag: {},
    Shoes: {},
    Beauty: {},
    Accessories: {},
  };

  const listChilds = (obj: any) => {
    // função recursiva
    return Object.keys(obj).map((key) => {
      const t = obj[key];

      if (Object.keys(t).length > 0) {
        return (
          <div>
            <li className="p-3.5">{key}</li>
            <div className="p-2">{listChilds(t)}</div>
          </div>
        );
      }

      return <li className="p-3.5">{key}</li>;
    });
  };

  return (
    <nav className="bg-surface-background fixed z-10 h-screen w-screen">
      <button onClick={onClickClose}>
        <Icon name="close" />
      </button>

      <ul>{listChilds(menus)}</ul>
    </nav>
  );
};

export { Menu };
