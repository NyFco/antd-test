import { Row, Col } from "antd";
import Header from "./Header";
import Search from "./Search";
import PinnedContainer from "./PinnedContainer";
import TodoList from "./TodoList";

const Container = () => {
  return (
    <Row className="container">
      <Col
        span={18}
        offset={3}
        style={{ backgroundColor: "red", height: "100%" }}
      >
        <Row>
          <Col span={24}>
            <Header />
          </Col>
        </Row>
        <Row gutter={[15, 15]} className="container__content">
          <Col span={6}>
            <div>Test</div>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <Search />
              </Col>
              <Col span={24}>
                <PinnedContainer />
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <TodoList />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Container;
