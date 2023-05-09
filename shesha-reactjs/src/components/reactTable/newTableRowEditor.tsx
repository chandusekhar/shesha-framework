import { CrudProvider } from 'providers/crudContext';
import React, { useState } from 'react';
import { FC } from 'react';
import { ColumnInstance, HeaderGroup } from 'react-table';
import { NewRowCell } from './newRowCell';

export interface INewRowEditorProps {
    columns: ColumnInstance[];
    headerGroups: HeaderGroup<any>[];
    creater: (data: any) => Promise<any>;
}

export const NewTableRowEditor: FC<INewRowEditorProps> = (props) => {
    const { creater, columns, headerGroups } = props;

    const [rowData] = useState({});
    
    const headerGroupProps = headerGroups.length > 0
        ? headerGroups[0].getHeaderGroupProps()
        : {};

    return (
        <div className="tbody">
            <CrudProvider
                isNewObject={true}
                mode='create'
                data={rowData}
                creater={creater}
                
                allowEdit={false}
                updater={null}
                allowDelete={false}
                deleter={null}
            >
                <div
                    className='tr tr-body'
                    {...headerGroupProps}
                >
                    {columns.map((column, index) => {
                        return <NewRowCell key={index} column={column} />;
                    })}
                </div>
            </CrudProvider>
        </div>
    );
};

export default NewTableRowEditor;