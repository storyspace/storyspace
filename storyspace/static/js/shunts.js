setupShunts = function(container_id) {
    container = document.querySelector(container_id);

    shunts = new ShuntDiv(container, [
        new ShuntDiv.Transition('frame-map', 'frame-list', 'dualAnimateCss', 'event', {
            exit_animation_name:        'slideOutLeft',
            enter_animation_name:       'slideInRight',
            exit_animation_function:    'ease',
            enter_animation_function:   'ease',
            eventName:                  'shunt',
        }),
        new ShuntDiv.Transition('frame-list', 'frame-map', 'dualAnimateCss', 'event', {
            exit_animation_name:        'slideOutRight',
            enter_animation_name:       'slideInLeft',
            exit_animation_function:    'ease',
            enter_animation_function:   'ease',
            eventName:                  'shunt',
        }),
    ], {
        default:        'frame-map',
        saveWithHash:   false,
    });

    return shunts;
}
