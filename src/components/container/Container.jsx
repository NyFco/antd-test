// import styles from "./Container.module.css";
import { Row, Col } from "antd";

const Container = () => {
  return (
    <Row>
      <Col span={8}>
        <div style={{ backgroundColor: "red" }}>test</div>
      </Col>
      <Col span={8}>
        <div style={{ backgroundColor: "blue" }}>test</div>
      </Col>
      <Col span={8}>
        <div style={{ backgroundColor: "yellow" }}>test</div>
      </Col>
    </Row>
  );
};

export default Container;
