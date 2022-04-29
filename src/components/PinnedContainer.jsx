import { Row, Col } from "antd";
import Pinned from "./Pinned";

const PinnedContainer = () => {
  return (
    <Row gutter={[10, 10]} className="pinnedContainer">
      <Col span={4}>
        <Pinned />
      </Col>
      <Col span={4}>
        <Pinned />
      </Col>
      <Col span={4}>
        <Pinned />
      </Col>
      <Col span={4}>
        <Pinned />
      </Col>
      <Col span={4}>
        <Pinned />
      </Col>
      <Col span={4}>
        <Pinned />
      </Col>
      <Col span={4}>
        <Pinned />
      </Col>
      <Col span={4}>
        <Pinned />
      </Col>
      <Col span={4}>
        <Pinned />
      </Col>
      <Col span={4}>
        <Pinned />
      </Col>
      <Col span={4}>
        <Pinned />
      </Col>
      <Col span={4}>
        <Pinned />
      </Col>
    </Row>
  );
};

export default PinnedContainer;
