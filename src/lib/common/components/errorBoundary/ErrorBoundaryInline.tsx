import * as React from 'react';
import Button, { ButtonProps } from 'guestbell-forms/build/components/button';

const MISSING_ERROR = 'Error was swallowed during propagation.';

export interface ErrorBoundaryInlineState {
  error: Error | null | undefined;
}

export interface ErrorBoundaryInlineProps<StateT> {
  title?: string;
  body?: string;
  buttonText?: string;
  buttonProps?: ButtonProps;
  onChange: (state: StateT) => void;
  state: StateT;
  createInitialState: () => StateT;
  hideButton?: boolean;
}

class ErrorBoundaryInline<StateT> extends React.Component<
  ErrorBoundaryInlineProps<StateT>,
  ErrorBoundaryInlineState
> {
  public static defaultProps = {
    title: 'Something went wrong.',
    body:
      'We found a problem in this section. You can remove it by clicking the button bellow.',
    buttonText: 'Remove component',
  };
  constructor(props: ErrorBoundaryInlineProps<StateT>) {
    super(props);
    this.state = { error: undefined };
    this.onClick = this.onClick.bind(this);
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error: error || new Error(MISSING_ERROR) };
  }

  componentDidCatch(error: Error | null, info: object) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return (
        <div className="p-3 d-flex flex-column">
          <h3 className="text-center mb-0">{this.props.title}</h3>
          {this.props.body && <p className="mt-3">{this.props.body}</p>}
          {!this.props.hideButton && (
            <div className="mx-auto mt-3">
              <Button
                type="error"
                {...this.props.buttonProps}
                onClick={this.onClick}
              >
                {this.props.buttonText}
              </Button>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }

  private onClick() {
    console.warn(`Faulty state: ${JSON.stringify(this.props.state, null, 1)}`);
    this.props.onChange(this.props.createInitialState());
    this.setState({ error: undefined });
  }
}

export default ErrorBoundaryInline;
