import MyComponent from '../../../../slices/BannerSlice';

export default {
  title: 'slices/BannerSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"paragraph","text":"Ea nisi velit sunt cillum consectetur enim ea dolore veniam veniam. Velit in exercitation qui fugiat duis dolor consectetur anim Lorem quis.","spans":[]}],"description":"The text will be showing in description","pavemintBannerImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop","pavemintImage":{"dimensions":{"width":150,"height":150},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=150&h=150&fit=crop"}},"newTextField":[{"type":"paragraph","text":"Aute deserunt dolor culpa. Occaecat cupidatat laboris sunt id ut. Eiusmod ea occaecat est.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _RightHeroBanner = () => <MyComponent slice={{"variation":"rightHeroBanner","name":"RightHeroBanner","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"paragraph","text":"Voluptate occaecat cillum id non aute Lorem exercitation. Ipsum incididunt deserunt cillum aute occaecat elit est ipsum. Consectetur eiusmod occaecat ullamco enim sit id fugiat dolore aliquip do.","spans":[]}],"pavemintBannerImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop","pavemintImage":{"dimensions":{"width":150,"height":150},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=150&h=150&fit=crop"}},"newTextField":[{"type":"paragraph","text":"Eiusmod ex consequat sit culpa cillum excepteur quis eiusmod exercitation cillum anim Lorem laboris officia.","spans":[]}]},"id":"_RightHeroBanner"}} />
_RightHeroBanner.storyName = 'RightHeroBanner'
