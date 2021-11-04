import { Button, Col, Row, ButtonGroup } from 'react-bootstrap';
import { ThemeReducerActionType, useThemeReducer } from '../contexts/theme-context';

const ThemeController = () => {
    const dispatch = useThemeReducer();

    const onBootstrapClick = () => {
        dispatch({ type: ThemeReducerActionType.Bootstrap });
    }

    const onMaterialUIClick = () => {
        console.log('SET MATERIAL UI')
        dispatch({ type: ThemeReducerActionType.MaterialUI });
    }

    return (
        <Row>
            <Col xs={{ offset: 4, span: 4 }} >
                <ButtonGroup>
                    <Button variant="secondary" onClick={onBootstrapClick}>
                            Bootstrap
                        </Button>
                        <Button variant="secondary" onClick={onMaterialUIClick}>
                            MaterialUI
                        </Button>
                </ButtonGroup>
            </Col>
        </Row>
    )
}

export default ThemeController;

