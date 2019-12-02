import React from 'react';
import { connect } from 'react-redux';
import { fetchImg, loadMoreImg, toggleFavorite } from '../../state/actions/imgAction';
import { Header } from '../ui/Header';
import { Footer } from '../ui/Footer';
import { Content } from '../ui/Content';
import { ImageList } from '../ui/ImageList';
import { SearchForm } from './SearchForm';
import { SearchLoadMore } from './SearchLoadMore';

class Search extends React.Component {
    render() {
        const { onFetchImg, onLoadMoreImg, onToggleFavorite, loadingSearch, loadingMore, imgs } = this.props;
        const favouritedImgs = imgs.filter(item => item.isFavorited);

        return (
            <>
                <Header
                    favoritedCount={favouritedImgs.length}
                    pathName={this.props.match.path}
                />
                <Content>
                    <SearchForm
                        loadingSearch={loadingSearch}
                        fetchImg={onFetchImg}
                    />
                    <ImageList
                        imgList={imgs}
                        onToggleFavorite={onToggleFavorite}
                    />
                    {imgs.length > 0 &&
                        <SearchLoadMore
                            onLoadMoreImg={onLoadMoreImg}
                            loadingMore={loadingMore}
                        />
                    }
                </Content>
                <Footer />
            </>
        );
    }
}

const mapStateToProps = state => ({
    imgs: state.imgReducer.imgs,
    loadingSearch: state.imgReducer.loadingSearch,
    loadingMore: state.imgReducer.loadingMore,
});

const mapDispatchToProps = dispatch => ({
    onFetchImg: (query) => dispatch(fetchImg(query)),
    onLoadMoreImg: () => dispatch(loadMoreImg()),
    onToggleFavorite: (id) => dispatch(toggleFavorite(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);