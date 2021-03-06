import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px 4px 16px;

  height: 50px;
  width: 200px;

  border-radius: 3px;

  cursor: pointer;
  background: #efefef;
  &:hover {
    background: #d7d7d7;
  }
`;
const Header = styled.div`
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

interface ListContainerProps {
    top: number;
    left: number;
    width: number;
}
const ListContainer = styled.ul<ListContainerProps>`
  position: absolute;
  display: block;
  border-radius: 3px;
  background: #efefef;
  padding: 0;
  margin: 4px 0 0 0;

  width: ${(props) => `${props.width}px`};
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 16px;
  line-height: 20px;
  padding: 4px 16px 4px 16px;

  cursor: pointer;

  &:hover {
    background: #d7d7d7;
  }
`;

interface SelectProps {
    onChange: (value: string) => void;
    value: string;
    placeholder?: string;
    options: string[];
}
export const Select = (props: SelectProps) => {
    const { value: receivedValue, onChange, options, placeholder } = props;

    const [value, setValue] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const headerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setValue(receivedValue);
    }, [receivedValue, setValue]);

    const handleSelectClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setValue(option);
        setIsOpen(false);
        onChange(option);
    };

    /**
     * Align <ListContainer> below <Header/>
     * @param element
     */
    const topOffset = (element: HTMLDivElement) => {
        return (
            element.getBoundingClientRect().top +
            element.getBoundingClientRect().height
        );
    };

    /**
     * Align <ListContainer> horizontally with <Header/>
     * @param element
     */
    const leftOffset = (element: HTMLDivElement) => {
        return element.getBoundingClientRect().left;
    };

    /**
     * <ListContainer/> same width as <Header/>
     * @param element
     */
    const parentWidth = (element: HTMLDivElement) => {
        return element.getBoundingClientRect().width;
    };

    return (
        <>
            <HeaderContainer ref={headerRef} onClick={handleSelectClick}>
                <Header>{value != null ? value : <>{placeholder}</>}</Header>
                <Icon />
            </HeaderContainer>
            {isOpen && headerRef.current != null ? (
                <Overlay onClick={() => setIsOpen(false)}>
                    <ListContainer
                        top={topOffset(headerRef.current)}
                        left={leftOffset(headerRef.current)}
                        width={parentWidth(headerRef.current)}
                    >
                        {options.map((option, index) => (
                            <ListItem onClick={() => handleOptionClick(option)} key={index}>
                                {option}
                            </ListItem>
                        ))}
                    </ListContainer>
                </Overlay>
            ) : null}
        </>
    );
};

const Icon = () => {
    return <span>+</span>;
};
