import React, { Component } from "react";
import { Spin } from "antd";

class Loading extends Component {
    render() {
        const { loading } = this.props;
        return loading && <div className="load-save" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgb(255,255,255,0.5)", zIndex: 999 }}>
            <Spin size="large" spinning={loading} style={{ position: 'relative', top: '50%', left: '50%'}} />
        </div>
    }
}

export default Loading;