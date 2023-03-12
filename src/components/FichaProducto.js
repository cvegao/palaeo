import React from 'react';
import {Button, Container, CardImg, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import './FichaProducto.css';
import listaCarrito from '../listaCarrito.json';

class FichaProducto extends React.Component {
    constructor(props) {
        super();
        this.state = {
            modal: false,
            listaCarrito
        }
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
        this.stock = props.props.stock;
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    // Agrega item al listaCarrito.json
    agregarCarrito() {
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
        });
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
        this.actualizarStock();
    }

    // Actualiza stock de producto al agregarlo al carrito
    actualizarStock() {
        this.stock--;
    }

    render () {
        return(
            <Container>
                <Button onClick={this.toggle}>Ver ficha</Button>

                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p>El detalle del producto seleccionado es el siguiente: </p>
                        {this.props.props.descripcion}
                        <p>Este producto tiene un valor de <b>{this.props.props.precio}</b></p>
                        <p>Hay <b>{this.stock}</b> unidades de este producto disponibles.</p>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                        <Button color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
            
        );
    }
}

export default FichaProducto;