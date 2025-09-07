import Backward from "@/assets/icons/backward.svg";
import BackwardLine from "@/assets/icons/BackwardLine.svg";
import Call from "@/assets/icons/Call.svg";
import Close from "@/assets/icons/Close.svg";
import DoNotBleach from "@/assets/icons/Do Not Bleach.svg";
import DoNotTumbleDry from "@/assets/icons/Do Not Tumble Dry.svg";
import DoNotWash from "@/assets/icons/Do Not Wash.svg";
import DoorToDoorDelivery from "@/assets/icons/Door to Door Delivery.svg";
import Down from "@/assets/icons/Down.svg";
import Export from "@/assets/icons/Export.svg";
import Filter from "@/assets/icons/Filter.svg";
import ForwardArrow from "@/assets/icons/Forward Arrow.svg";
import Forward from "@/assets/icons/Forward.svg";
import Gallery from "@/assets/icons/Gallery.svg";
import GridView from "@/assets/icons/grid view.svg";
import Heart from "@/assets/icons/Heart.svg";
import IronLowTemperature from "@/assets/icons/Iron Low Temperature.svg";
import Listview from "@/assets/icons/Listview.svg";
import Location from "@/assets/icons/Location.svg";
import Menu from "@/assets/icons/Menu.svg";
import Plus from "@/assets/icons/Plus.svg";
import Refresh from "@/assets/icons/Refresh.svg";
import Resize from "@/assets/icons/Resize.svg";
import Search from "@/assets/icons/Search.svg";
import Shipping from "@/assets/icons/Shipping.svg";
import ShoppingBag from "@/assets/icons/shopping bag.svg";
import Tag from "@/assets/icons/Tag.svg";
import Up from "@/assets/icons/Up.svg";
import Voucher from "@/assets/icons/Voucher.svg";

const icons = {
  "backward": Backward,
  "backward-line": BackwardLine,
  "call": Call,
  "close": Close,
  "do-not-bleach": DoNotBleach,
  "do-not-tumble-dry": DoNotTumbleDry,
  "do-not-wash": DoNotWash,
  "door-to-door-delivery": DoorToDoorDelivery,
  "down": Down,
  "export": Export,
  "filter": Filter,
  "forward-arrow": ForwardArrow,
  "forward": Forward,
  "gallery": Gallery,
  "grid-view": GridView,
  "heart": Heart,
  "iron-low-temperature": IronLowTemperature,
  "listview": Listview,
  "location": Location,
  "menu": Menu,
  "plus": Plus,
  "refresh": Refresh,
  "resize": Resize,
  "search": Search,
  "shipping": Shipping,
  "shopping-bag": ShoppingBag,
  "tag": Tag,
  "up": Up,
  "voucher": Voucher,
};

type IconProps = {
  name: keyof typeof icons;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const Component = icons[name];
  if (!Component) {
    return null;
  }
  return <Component className={className} />;
}

export default Icon;
