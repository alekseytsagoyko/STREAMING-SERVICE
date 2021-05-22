function createFileInput(setName, ref, setDuration) {
    const input = document.createElement('input');
    input.onchange = (e) => {
        setName(e.target.files[0].name);
        if (e.target.files[0].type == 'audio/mpeg') {
            getDuration(input, setDuration);
        }
    };
    input.type = 'file';
    ref.current = input;
}

export default createFileInput;