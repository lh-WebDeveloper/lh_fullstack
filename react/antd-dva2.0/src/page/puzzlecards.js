import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva'; //封装了redux 复杂的流程，6个API搞定所有

const namespace = 'puzzlecards';
const mapStateToProps = (state) => {
    const cardList = state[namespace].data
    return {
        cardList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // onClickAdd: (newCard) => {
        //     const action = {
        //         type: `${namespace}/addNewCard`,  // 某个分支的某个方法
        //         payload: newCard
        //     }
        //     dispatch(action)
        // }
        onDidMount: () => {
            dispatch({
                type: `${namespace}/queryInitCards`  // effects的方法 是异步的

            })
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)   // 高阶组件 插入props的能力
class PuzzleCardsPage extends Component {
    componentDidMount() {
        this.props.onDidMount()
    }
    render() {
        return (
          <div>
            {
              this.props.cardList.map(card => {
                return (
                  <Card key={card.id}>
                    <div>Q: {card.setup}</div>
                    <div>
                      <strong>A: {card.punchline}</strong>
                    </div>
                  </Card>
                );
              })
            }
            {/* <div>
                <Button onClick={() => this.props.onClickAdd({
                    setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    punchline: 'here we use dva',        
                })}>添加卡片</Button>
            </div> */}
          </div>
        );
      }
}
export default PuzzleCardsPage
