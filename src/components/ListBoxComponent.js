import { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom';

const ListBoxComponent = forwardRef(function ListboxComponentInner(
    { Children, ...rest },
    ref
) {
    const navigate = useNavigate();
    function handleClick(e) {
        navigate(`/search/${e.target.innerHTML}`)
    }
    return (
        <ul
            ref={ref}
            {...rest}
            onClick={({ target }) => handleClick({ target })}
        />
    );
});

export default ListBoxComponent;