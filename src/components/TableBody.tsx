import { IBody } from "../data/IBody"
import { IHeader } from "../data/IHeader"

interface bodyProps {
    body: IBody,
    header: IHeader
}

export function TableBody({body, header}: bodyProps) {
    return(
        <tbody>
                <tr>
                    <td data-label={header.id}>{body.id}</td>
                    <td data-label={header.name}>{body.name}</td>
                    <td data-label={header.number}>{body.number}</td>
                    <td data-label={header.db}>{body.db}</td>
                    <td data-label={header.de}>{body.de}</td>
                    <td data-label={header.price}>{body.price}</td>
                </tr>
        </tbody>
    )
}