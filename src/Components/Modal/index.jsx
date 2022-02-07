import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.75);
	transition: opacity ${(props) => props.fadeDuration};
	&.fadeModal-enter {
		opacity: 0;
	}
	&.fadeModal-enter-active {
		opacity: 1;
	}
	&.fadeModal-exit {
		opacity: 1;
	}
	&.fadeModal-exit-active {
		opacity: 0;
	}
`;

const Content = styled.div`
	position: relative;
	text-align: center;
	margin: 200px auto;
	max-width: 400px;
	background: #fff;
	padding: 15px;
	border-radius: 5px;
`;

const CloseModalButton = styled.div`
	position: absolute;
	top: 0.5px;
	right: -3.5px;
	display: block;
	width: 30px;
	height: 30px;
	opacity: 0.5;
	&:hover {
		opacity: 1;
	}
	&:before,
	&:after {
		position: absolute;
		left: 15px;
		content: ' ';
		height: 16px;
		width: 2px;
		background-color: #333;
	}
	&:before {
		transform: rotate(45deg);
	}
	&:after {
		transform: rotate(-45deg);
	}
`;

function Modal({ modalState, toggleModal, fadeDuration, children }) {
	return (
		<>
			<CSSTransition classNames="fadeModal" in={modalState} unmountOnExit timeout={200}>
				<Background fadeDuration={fadeDuration} onClick={toggleModal}>
					<Content onClick={(e) => e.stopPropagation()}>
						{children}
						<CloseModalButton onClick={toggleModal} />
					</Content>
				</Background>
			</CSSTransition>
		</>
	);
}

Modal.propTypes = {
	modalState: PropTypes.bool.isRequired,
	toggleModal: PropTypes.func.isRequired,
	fadeDuration: PropTypes.string,
};

Modal.defaultProps = { fadeDuration: '400ms' };

export default Modal;
