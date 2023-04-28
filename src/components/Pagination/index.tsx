import React from "react";
import {Button, PaginationContainer} from "./styles";

interface PaginationProps {
    currentPage : number;
    totalPages : number;
    onChange : (page : number) => void;
}

export const Pagination : React.FC < PaginationProps > = ({currentPage, totalPages, onChange}) => {
    const pages = Array.from({
        length: totalPages
    }, (_, i) => i + 1);

    return (
        <PaginationContainer>
            <Button onClick={() => onChange(currentPage - 1)} disabled={currentPage === 1}>
                {"<"}
            </Button>
            {pages.map((page) => (
                <Button
                    key={page}
                    onClick={() => onChange(page)}
                    disabled={page === currentPage}>
                    {page}
                </Button>
            ))}
            <Button
                onClick={() => onChange(currentPage + 1)}
                disabled={currentPage === totalPages}>
                {">"}
            </Button>
        </PaginationContainer>
    );
};