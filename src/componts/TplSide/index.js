// // import {isImgComponent} from "@/layout/Left";
import {useCanvasByContext} from "@/hooks";
import classNames from "classnames";
import {SideWrapper} from "./style";
const defaultStyle = {
  // position: "absolute",
  // top: 1,
  // left: 0,
  // width: 80,
  // height: 30,
  // lineHeight: "30px",
  // fontSize: 12,
  // fontWeight: "normal",
  // color: "#000",
  // backgroundColor: "#ffffff00",
  // textAlign: "left",
  // borderRadius: "0%",
  // borderStyle: "none",
  // borderWidth: "0",
  // borderColor: "#ffffff00",
};

const settings = [
  {
    key: 0,
    desc: "《精通React》",
    img: "https://gd-hbimg.huaban.com/e048bab657b4050fe75256e46251378ab13daf966445aa-0TuR3X_fw1200",
    data: `
    
    {
      "style": {
        "width": 800,
        "height": 8000,
        "backgroundColor":"",
        "backgroundImage": "",
        "backgroundPosition": "center",
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "boxSizing": "content-box"
      },
      "cmps": [ {
        "key": 0.7349032473153161,
        "value": "《精通React》",
        "style": {
          "position": "absolute",
          "top": 92,
          "left": 2,
          "width": 774,
          "height": 174,
          "borderRadius": "0%",
          "borderStyle": "none",
          "borderWidth": "0",
          "borderColor": "#ffffff00",
          "transform": "-15",
          "lineHeight": "174px",
          "fontSize": 104,
          "fontWeight": "bold",
          "color": "#ffffff",
          "backgroundColor": "#ffffff00",
          "textAlign": "center"
        },
        "type": 1
      }, {
        "key": 0.09199263307831118,
        "value": "用一顿海底捞的钱，",
        "style": {
          "position": "absolute",
          "top": 634,
          "left": 177,
          "width": 477,
          "height": 116,
          "borderRadius": "0%",
          "borderStyle": "none",
          "borderWidth": "0",
          "borderColor": "#ffffff00",
          "transform": 0,
          "lineHeight": "116px",
          "fontSize": 52,
          "fontWeight": "bold",
          "color": "#ffffff",
          "backgroundColor": "#ffffff00",
          "textAlign": "left"
        },
        "type": 1
      }, {
        "key": 0.07895562033889125,
        "value": "撬动月薪的大涨",
        "style": {
          "position": "absolute",
          "top": 719,
          "left": 193,
          "width": 395,
          "height": 121,
          "borderRadius": "0%",
          "borderStyle": "none",
          "borderWidth": "0",
          "borderColor": "#ffffff00",
          "transform": 0,
          "lineHeight": "121px",
          "fontSize": 52,
          "fontWeight": "bold",
          "color": "#ffffff",
          "backgroundColor": "#ffffff00",
          "textAlign": "left"
        },
        "type": 1
      }, {
        "key": 0.6433404952915975,
        "value": "最硬核的React课程",
        "style": {
          "position": "absolute",
          "top": 911,
          "left": 150,
          "width": 524,
          "height": 68,
          "borderRadius": "0%",
          "borderStyle": "none",
          "borderWidth": "0",
          "borderColor": "#ffffff00",
          "transform": 0,
          "lineHeight": "68px",
          "fontSize": 56,
          "fontWeight": "bold",
          "color": "#664955",
          "backgroundColor": "#ffffff00",
          "textAlign": "center"
        },
        "type": 1
      }],
      "key": 0,
      "desc": "《精通React》",
      "img": "https://gd-hbimg.huaban.com/e048bab657b4050fe75256e46251378ab13daf966445aa-0TuR3X_fw1200"
    }
    
    `,
  },
  {
    key: 1,
    desc: "《精通React》",
    img: "https://gd-hbimg.huaban.com/e048bab657b4050fe75256e46251378ab13daf966445aa-0TuR3X_fw1200",
    data: '{"style":{"width":800,"height":8000}}'
  },
];

export default function TplSide() {
  const canvas = useCanvasByContext();
  console.log(canvas);
  const setCanvas = (_cmp) => {
    canvas.setCanvas(JSON.parse(_cmp));
  };

  return (
    <SideWrapper>
      <ul className={classNames('box')}>
        {settings.map((item) => (
          <li
            className='item'
            key={item.key}
            onClick={() => setCanvas(item.data)}
            >
            <div className='desc'>{item.desc}</div>
            <img src={item.img} alt={item.desc} />
          </li>
        ))}
      </ul>
    </SideWrapper>
  );
}