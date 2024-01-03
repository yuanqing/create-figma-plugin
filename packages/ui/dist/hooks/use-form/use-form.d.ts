import { InitialFocus } from '../use-initial-focus/use-initial-focus.js';
export declare function useForm<State>(initialState: State, options: {
    close: (state: State) => void;
    transform?: (state: State) => State;
    validate?: (state: State) => boolean;
    submit: (state: State) => void;
}): {
    disabled: boolean;
    formState: State;
    handleSubmit: () => void;
    initialFocus: InitialFocus;
    setFormState: <Name extends keyof State>(state: State[Name], name: undefined | Name) => void;
};
//# sourceMappingURL=use-form.d.ts.map