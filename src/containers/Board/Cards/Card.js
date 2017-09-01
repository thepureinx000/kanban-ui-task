import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object
};

const galPng = require('../../../assets/images/gal.png');
const delPng = require('../../../assets/images/del.png');


class Card extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isDelete: false
    };

    this.onDelete = this.onDelete.bind(this);
  }
  
  onDelete() {
    this.setState({
      isDelete: !this.state.isDelete
    });
  }

  render() {
    const { style, item } = this.props;
    const deleteItem = this.state.isDelete ? 'none' : '';

    return (
      <div style={style} style={{ display: deleteItem }} className="item" id={style ? item.id : null}>
        <div className="item-name">{item.title}</div>
        <div className="item-container">
          <div className="item-avatar-wrap">
            <img src={`https://randomuser.me/api/portraits/med/men/${item.id}.jpg`} alt="" />
          </div>
          <div className="item-content">
            <div className="item-author">{`${item.firstName} ${item.lastName}`}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, banditos.</p>
          </div>
        </div>
        <div className="item-perfomers">
          <div className="delete-perfomers">
            <a href="#" onClick={this.onDelete}><img src={delPng} alt="Delete" /></a>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = propTypes;

export default Card;
