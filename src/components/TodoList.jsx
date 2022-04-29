import { Row, Col } from "antd";

const TodoList = () => {
  return (
    <aside className="todoList">
      <Row className="todoList__header" justify="space-between" align="middle">
        <Col>
          <h1>دست نویس</h1>
        </Col>
        <Col>
          <button>مخفی کن</button>
        </Col>
      </Row>
      <Row>
        <li>Test</li>
      </Row>
      <Row className="todoList__footer">
        <button>Add new</button>
      </Row>
    </aside>
  );
};

export default TodoList;
