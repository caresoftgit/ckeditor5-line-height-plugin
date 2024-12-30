import {Plugin} from 'ckeditor5'
import LineHeightEditing from './lineheightediting'
import LineHeightUI from './lineheightui'

export default class LineHeight extends Plugin {
    static get requires() {
        return [LineHeightEditing, LineHeightUI]
    }

    static get pluginName() {
        return 'LineHeight'
    }
}
