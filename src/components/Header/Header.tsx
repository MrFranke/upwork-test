import React from 'react';
import css from './Header.module.css';
import { Col, Row } from "react-bootstrap";
import { BsCloud, BsBell, BsSearch } from "react-icons/bs";

export const Header: React.FC = () => (
  <div className={css.Header}>
    <Row className={'align-items-center'}>
      <Col md={6} xs={2} sm={4}>
        <BsSearch />
      </Col>
      <Col md={2} xs={4} sm={2} className={'text-right'}>
        <BsBell size={'1.5rem'} />&nbsp;<BsCloud size={'1.5rem'} />
      </Col>
      <Col md={4} xs={6} sm={6}>
        <div>
          <img src="https://via.placeholder.com/50" alt="Principal Maike" className={css.Avatar} />
          &nbsp;
          Principal Maike
        </div>
      </Col>
    </Row>
  </div>
);
