import { UPDATE, INITIAL_CLICK } from '../actionTypes';
import { updateMd } from '../actions';

const placeholder = 
`# Welcome to the retro Markdown Live Editor (MDLE)!

Feel free to write your markdown here. When you are done you may download your file or copy your text.

***May the code be with you***

`;
const initialState = {
    input: placeholder,
    initial: true,
    classPresentation: "display",
    classEdit: "no-show",
};

function updatePreview(state = initialState, action) {
    switch (action.type) {
        case INITIAL_CLICK: 
            return Object.assign({}, state, {
              initial: false,
              classPresentation: "no-show",
              classEdit: "display"
            });
        case UPDATE:
            return Object.assign({}, state, {
                input: action.payload.content
            });
        default:
            return state;
    }
}

export default updatePreview;