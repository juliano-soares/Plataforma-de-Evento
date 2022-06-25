import { LogoFooter } from "./LogoFooter";

export function Footer() {
    return (
        <footer className="m-6 bg-gray-900 border-t border-gray-600">
            <div className="flex items-center mt-6 justify-between">
                <div className="flex items-center">
                    <LogoFooter />
                    <p className="ml-6 text-gray-300">Rocketseat - Todos os direitos reservados</p>
                </div>
                <span className="text-gray-300">Políticas de privacidade</span>
            </div>
        </footer>
    )
}