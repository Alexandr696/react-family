import { IHeader } from "../data/IHeader"

interface headerProps {
    header: IHeader
}

export function TableHeader({header}: headerProps) {
    return (
        <thead>
                <tr>
                    <th>{header.id}</th>
                    <th>{header.name}</th>
                    <th>{header.number}</th>
                    <th>{header.db}</th>
                    <th>{header.de}</th>
                    <th>{header.price}</th>
                </tr>
        </thead>
    )
}