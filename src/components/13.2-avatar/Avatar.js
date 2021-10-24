import React from 'react';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { totalReactPackages: [] }
    }

    async componentDidMount() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            arr.push({ totalReactPackages: data.results[0] })
        }
        this.setState({ totalReactPackages: arr })
        console.log(arr);
    }

    render() {
        return (
            <div >
                {
                    this.state.totalReactPackages.map((u) => {
                        return (
                            <div>
                                <img src={u.totalReactPackages.picture.large} />
                                <br />
                                {u.totalReactPackages.name.first} {u.totalReactPackages.name.last}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Avatar;
