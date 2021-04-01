//this is like the munging file for font folder

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

module.exports = { formatGifs };
