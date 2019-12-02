import React from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../state/actions/imgAction';
import { ImageList } from '../ui/ImageList';
import { Header } from '../ui/Header';
import { Footer } from '../ui/Footer';
import { Content } from '../ui/Content';

class Favourites extends React.Component {
    render() {
        const { imgs, toggleFavorite } = this.props;
        const favouritedImgs = imgs.filter(item => item.isFavorited);

        return (
            <>
                <Header
                    favoritedCount={favouritedImgs.length}
                    pathName={this.props.match.path}
                />
                <Content>
                    <ImageList
                        imgList={favouritedImgs}
                        onToggleFavorite={toggleFavorite}
                    />
                </Content>
                <Footer />
            </>
        );
    }
}

const mapStateToProps = state => ({
    imgs: state.imgReducer.imgs,
});

const mapDispatchToProps = dispatch => ({
    toggleFavorite: (id) => dispatch(toggleFavorite(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Favourites);