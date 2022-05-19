
import box from "./AppCard";
import data from "./apps.json";

// export default class AppsFrame extends Component {
//   constructor() {
//     super();
//     this.data = data;
//     this.boxes = this.data.apps.map((item, i) => (
//       <Box
//         appname={item.name}
//         appurl={item.url}
//         description={item.description}

//         />
//     ));
//     this.elements = this.boxes.copyWithin();
//   }
//   render() {
//     return <div className="apps">{this.elements}</div>;
//   }
// }

export default function AppsFrame() {
  let boxes = data.apps.map((item, i) =>
    box(item.name, item.url, item.description)
  );
  console.log(boxes)
  return <div className="apps">{boxes}</div>;
}
