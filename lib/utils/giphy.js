function formatGifs(array) {
    
    const shapedResponse = array.map(item => {
        return {
            id: item.id,
            title: item.title,
            images: item.images,
            slug: item.slug,  
            url: item.url,
            bitly_url: item.bitly_url,
            embed_url: item.embed_url,
            username: item.username,
            source: item.source,
            source_post_url: item.source_post_url,
            rating: item.rating
        }
    });

    return shapedResponse;
}

function shapeOneGif(data) {
    const shapedResponse = {
        id: data.id,
        title: data.title,
        images: data.images,
        slug: data.slug,  
        url: data.url,
        bitly_url: data.bitly_url,
        embed_url: data.embed_url,
        username: data.username,
        source: data.source,
        source_post_url: data.source_post_url,
        rating: data.rating       
    }

    return shapedResponse;
}

module.exports = { formatGifs, shapeOneGif };
