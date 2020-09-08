import React from 'react';
import css from './InfoCard.module.css';
import { Card, Col, Row } from "react-bootstrap";
import { RadialChart } from "../RadialChart/RadialChart";
import { Task } from "../../types/task";

type Props = Task;

const getDate = (date: Date) =>
  `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`

const taskIsCompleted = (progress: number) => progress === 100;

export const InfoCard: React.FC<Props> = (
  {
    date,
    progress,
    completed,
    remaining,
    title
  }) => {
  const isCompleted = taskIsCompleted(progress)
  return (
    <Card className={isCompleted ? css.Completed : css.InProgress}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Body>
          <Row>
            <Col>
              {isCompleted ? 'Qualified' : (<b>{remaining} Test Remaining</b>)}
              <br/>
              {completed} Test Complited
            </Col>
            <Col className={'text-center justify-content-center'}>
              <RadialChart progress={progress} />
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className={'text-right'}>
          {isCompleted ? `LT Date ${getDate(date)}` : (`Expected LT. Date ${getDate(date)}`)}
        </Card.Footer>
      </Card.Body>
    </Card>
  )
};
